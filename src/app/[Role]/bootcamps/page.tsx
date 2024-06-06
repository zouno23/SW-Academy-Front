import { cn } from "@/lib/utils";
import BootCampCard from "./BootCampCard";
import { GetBootCamps } from "@/app/Actions/BootCampsActions";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function BootCamp() {
  const Role = GetRole();
  const getter = await GetBootCamps();
  console.log(getter);
  if (getter.error) throw new Error(getter.error.message);
  const BootCamps = getter.response?.Result;
  return (
    <main
      className={cn(
        "bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black z-0 "
      )}
    >
      <Tabs
        defaultValue="Owned"
        className="bg-gray-50 border w-full   min-h-max  rounded-xl   dark:bg-slate-900 "
      >
        <TabsList className="grid w-full grid-cols-2 h-max ">
          <TabsTrigger value="Owned" className="text-2xl font-bold">
            My Bootcamps
          </TabsTrigger>
          {Role === "Student" && (
            <TabsTrigger value="All" className="text-2xl font-bold">
              All Bootcamps
            </TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="Owned">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 ">
            {BootCamps.Owned.length > 0 ? (
              BootCamps.Owned.map((item: any, index: string) => (
                <BootCampCard BootCamp={item.BootCamp} key={index} />
              ))
            ) : (
              <NotFound />
            )}
          </div>
        </TabsContent>
        {Role === "Student" && (
          <TabsContent value="All">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 min-h-max ">
              {BootCamps.All.length > 0 ? (
                BootCamps.All.map((item: any, index: string) => (
                  <BootCampCard BootCamp={item} key={index} />
                ))
              ) : (
                <NotFound />
              )}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </main>
  );
}

export default BootCamp;

function NotFound({}) {
  return (
    <>
      <div className="h-screen w-full text-4xl text-gray-500 font-bold grid text-center place-items-center col-span-1 sm:col-span-2 md:col-span-3">
        No Bootcamps Found
      </div>
    </>
  );
}

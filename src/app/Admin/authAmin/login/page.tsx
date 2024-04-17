import AuthBackground from "@/components/authbackground";
import AuthSpace from "./AuthSpace";
import { GoogleOAuthProvider } from "@react-oauth/google";


export default function LoginPage() {
  const clientid: string = process.env.CLIENT_ID ?? "";
  return (
    <GoogleOAuthProvider clientId={clientid}>
    <AuthBackground>
      <AuthSpace />
      </AuthBackground>
    </GoogleOAuthProvider>
  );
}

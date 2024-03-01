"use client"

type userData = {
    userId: string,
    userRole: string
}

export  function SetToLocalStorage(userData:userData) {
    try {
        const {userId, userRole} = userData
        localStorage.setItem("Id", userId);
        localStorage.setItem("Role", userRole);
        return({Id:localStorage.getItem("Id"),Role:localStorage.getItem("Role")});
        
    } catch (error) {
        return null
    }
}

export  function  GetUserLocalStorage(){
    try {
        return {Id:localStorage.getItem("Id"),Role:localStorage.getItem("Role")}
    } catch (error) {
        return null
    }
}

export function DestroyLocalStorage(){
    try {
        localStorage.removeItem('Id');
        localStorage.removeItem('Role');
        return(true)
    } catch (error) {
        return(false)
    }
}
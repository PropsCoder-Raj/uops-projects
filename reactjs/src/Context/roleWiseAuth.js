import React, { createContext, useEffect, useState } from "react";
import { useAuthUser, useSignOut } from 'react-auth-kit'
import toast from 'react-hot-toast';

export const RoleAuth = createContext();

export default function RoleAuthProvider(props) {
    const auth = useAuthUser();
    const signOut = useSignOut();

    const checkAdmin = async () => {
        if(auth().role !== 0){
            signOut();
            setTimeout(() => {
                toast.error("This section access only admin roles");
            }, 1000);
        }
    };

    const checkTeacher = async () => {
        if(auth().role !== 1){
            signOut();
            setTimeout(() => {
                toast.error("This section access only teacher roles");
            }, 1000);
        }
    };

    const checkStudent = async () => {
        if(auth().role !== 1){
            signOut();
            setTimeout(() => {
                toast.error("This section access only student roles");
            }, 1000);
        }
    };

    var data = {
        checkAdmin: checkAdmin,
        checkTeacher: checkTeacher,
        checkStudent: checkStudent
    };

    return (
        <RoleAuth.Provider value={data}>{props.children}</RoleAuth.Provider>
    );
}

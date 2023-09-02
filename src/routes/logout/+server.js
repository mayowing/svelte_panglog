 import { redirect } from "@sveltejs/kit";

 export const POST = () => {
    console.log("Logout ~~");

    throw redirect(303, '/login')
 }
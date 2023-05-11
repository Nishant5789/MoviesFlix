import Cors from 'cors';
import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import {NextResponse} from "next/server";

const cors = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  });

export async function POST(req, res) {

    // Run the cors middleware
    await cors(req, res);
    
    if(req.mehtod=='POST'){
        try {
            const body = await req.json();
            console.log("api object" , body);

            await dbConn();
            await Contact.create(body);

            return NextResponse.json({
                message:"Message sent successfully!"
            }, {
                status: 200
            })
        }catch (e) {
            // console.log(e);
            return NextResponse.json(
                { message: "Server error, please try again!" },
                { status: 500 }
            )
        }
    }
}
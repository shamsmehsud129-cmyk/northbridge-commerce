import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { error } = await supabase
      .from("enquiries")
      .insert({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        website: data.website,
        product_category: data.product_category,
        catalogue: data.catalogue,
        message: data.message,
        status: "new",
      });

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Could not save enquiry",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully",
    });
  } catch (error) {
    console.error("Enquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
import { type NextRequest, NextResponse } from "next/server";
import conn from "@/lib/db";

export async function GET(request: NextRequest) {
  let userId = request.cookies.get("user_id")?.value;
  let response = undefined;
  if (!userId) {
    try {
      const result = await conn.query("select uuid_generate_v4() as uuid;", []);
      userId = result.rows[0].uuid;
    } catch (e) {
        console.log("❌", e);
        return NextResponse.json({"error": {"message": "db"}}, { status: 409 });
    }
    if (!userId) {
      return NextResponse.json({"error": {"message": "user_id is empty"}}, { status: 409 });
    }
    response = NextResponse.json({"user_id": userId}, { status: 200 });
    response.cookies.set("user_id", userId);
  } else {
    response = NextResponse.json({"user_id": userId}, { status: 200 });
  }
  return response;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto{

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({ message: "mobile number is required"})
    mobile_no: number;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty({ message: "email id is required"})
    email_id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: "enterprise_name is required"})
    enterprise_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: "password is required"})
    password: string;
}

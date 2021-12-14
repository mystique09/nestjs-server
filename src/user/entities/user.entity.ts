import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, minlength: 8, maxlength: 12 })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
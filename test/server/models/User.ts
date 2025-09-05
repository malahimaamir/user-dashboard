
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  fatherName: string;
  phone: string;
  email: string;
  cnic: string;
  location: string;
  age: number;
  gender: string;
  profession: string;
  photo: {
    data: Buffer;
    contentType: string;
  };
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  cnic: { type: String, required: true },
  location: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  profession: { type: String, required: true },
  photo: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;

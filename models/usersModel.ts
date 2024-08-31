import { Schema, model } from "mongoose";
import { IUsers } from "../interfaces/users";
import bcrypt from 'bcryptjs';
const usersSchema: Schema = new Schema<IUsers>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 20 },
  image: String,
  role: { type: String, required: true, enum: ['manager', 'admin', 'user'], default: 'user' },
  active: { type: Boolean, default: true },
  passwordChangedAt: Date,
  resetCode: String,
  resetCodeExpireTime: Date,
  resetCodeVerify: Boolean
}, { timestamps: true });

usersSchema.pre<IUsers>('save', async function (next) {
  if (!this.isModified('password')) return next;
  this.password = await bcrypt.hash(this.password, 13)
});
export default model<IUsers>('users', usersSchema)
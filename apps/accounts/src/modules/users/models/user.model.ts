import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Schema({
  collection: 'users',
  autoIndex: true,
  timestamps: true
})
export class UserModel extends Document {
  @Prop({ type: String, index: true, default: uuid })
  public uuid: string;

  @Prop({
    type: String,
    index: true,
    required: true,
    unique: true
  })
  public username: string;

  @Prop({ type: String, required: true, select: false })
  public password: string;

  @Prop({ type: Boolean, default: false })
  public isEnabled?: boolean;

  @Prop({ type: Boolean, default: false })
  public hasVerifiedEmail?: boolean;

  @Prop({ index: true, type: String })
  public roleId: string;
}

const UserSchema = SchemaFactory.createForClass(UserModel);

UserSchema.virtual('role', {
  ref: 'RoleModel',
  localField: 'roleId',
  foreignField: 'uuid',
  justOne: true
});

export { UserSchema };

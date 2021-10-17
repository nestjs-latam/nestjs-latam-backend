import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Schema({
  collection: 'roles'
})
export class RoleModel extends Document {
  @Prop({ index: true, type: String, default: uuid })
  public uuid: string;

  @Prop({ index: true, required: true, type: String })
  public name: string;

  @Prop({ index: true, required: true, type: String })
  public scope: string;

  @Prop({ index: true, required: true, type: String })
  public code: string;
}

export const RoleSchema = SchemaFactory.createForClass(RoleModel);

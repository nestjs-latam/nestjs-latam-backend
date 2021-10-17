export class UserDto {
  public uuid: string;
  public username: string;
  public password: string;
  public isEnabled?: boolean;
  public hasVerifiedEmail?: boolean;
  public roleId: string;
  public createdAt: Date;
  public updatedAt: Date;
}

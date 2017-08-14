export class rolesData{
    public role_name: string;
    public description: string;
    public sub_role_name: string;
    public id: number;
    public success: string;
    public ip_address: string ="";
    public mac_address: string ="";
    public latitude: string ="";
    public longitude: string ="";


    public data: rolesData[] = [];
    constructor() {}
}

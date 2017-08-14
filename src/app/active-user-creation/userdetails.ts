import { Roles_subrole } from './role'
import { BranchDetails } from './branch_details';
import { Area } from './allocate_area_details'


export class User_Details{

public first_name: string;
public last_name: string;
public password: string;
public email: string;
public employee_id: number;
public contact_number: number;
public extension: number;
public branch: string;
public state: string;
public city: string;
public building: string;
public floor: string;
public designation: string;
public roles: Roles_subrole[] = []; // roles creation for users
public roles_status: Roles_subrole[] = [];  // edit 
public f_reporting_staff: string;
public f_reporting_staff_email: string;
public active: number;
//public allocate_area: Area[] = [];
public meta: any;
public all_taluks: string;
public ip_address: string ="";
public mac_address: string ="";
public latitude: string ="";
public longitude: string ="";
public area_allocated: string;
public success: string;
public msg: string;


constructor(){}
}
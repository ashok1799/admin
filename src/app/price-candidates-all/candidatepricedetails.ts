import { CandidateTaxDetails } from './candidate_tax';

export class CandidatePrice{

    public candidate_plan_id: number;
    public plan_name: string;
    public label_name: number;
    public no_of_interviews_offered: number;
    public plan_cost: number;
    public plan_validity_in_days: number;
    public job_priority: string;
    public pick_up_drop: number;
    public food: number;
    public guide_to_interview_location: number;
    public temporary_accomodation: number;
    public permanent_accomodation: number;
    public city_map_bus_route: number;
    public plan_status: number;
    public plan_start_date: string;
    public plan_end_date: Date;
    public tax_details: CandidateTaxDetails[] = [];
    public ip_address: string="";
    public mac_address: string="";
    public latitude: string="";
    public longitude: string="";
    public Success: string;
    public Message: string;

    
    
    constructor(){}

}

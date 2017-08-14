import { ActivityDetails } from './activity';

export class CandidateTaxDetails{
    public company_tax_id: number;
    public active_assigned_slab: string;
    public success: string;
    public message: string;
    public activity_log: ActivityDetails;
    constructor(){}
}

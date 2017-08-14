import { CompanyPlans } from './company'

export class MakeCopy{

	public label_name : string;
	public start_date : string;
	public end_date : string;
	public timestamp_start : string;
	public timestamp_end : string;
	public companies_enrolled : number;
	public created_by : string;
	public no_of_jobs : number;
        public plans: CompanyPlans[] = [];
        public plan_category_name: string;


	constructor(){}
}

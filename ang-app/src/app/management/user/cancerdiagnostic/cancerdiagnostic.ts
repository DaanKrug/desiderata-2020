export class Cancerdiagnostic {
	constructor(
		public id: number, 
		public conditions: string, 
		public a1_cancertype: string,
		public a2_cancerestadiament: string,
		public a3_date: string,
		public a4_userid: number,
		public a3_dateLabel: string,
		public ownerId: number,
		public _token: string,
		public objectClass: string
	) { 
	}
}
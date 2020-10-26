import { Cancerdiagnostic } from './cancerdiagnostic';
import { BaseCrudService } from '../../../../app_base/basecrud.service';

export class CancerdiagnosticService extends BaseCrudService {

	getUrl(){
		return this.getBase() + '/cancerdiagnostics';
	}

	getUrlForCache(){
		return this.getUrl();
	}

	getEmptyObject(conditions) :Object{
		var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
		return new Cancerdiagnostic(0,conditions,
		                            null,null,null,0,'null',
		                            ownerId,
		                            this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
	}

	getAll(page,rows,conditions): Promise<Cancerdiagnostic[]> {
		return new Promise<Cancerdiagnostic[]>(r => r(super.getAll(page,rows,this.getEmptyObject(conditions))));
	}

	load(id): Promise<Cancerdiagnostic> {
		return new Promise<Cancerdiagnostic>(r => r(super.load(id)));
	} 

	mergeAnotherInObject(object,anotherObject){
		object.a1_cancertype = super.getChangedValue(anotherObject.a1_cancertype,object.a1_cancertype);
		object.a2_cancerestadiament = super.getChangedValue(anotherObject.a2_cancerestadiament,object.a2_cancerestadiament);
		object.a3_date = super.getChangedValue(anotherObject.a3_date,object.a3_date);
		object.a4_userid = super.getChangedValue(anotherObject.a4_userid,object.a4_userid); 
		object.a3_dateLabel = super.getChangedValue(anotherObject.a3_dateLabel,object.a3_dateLabel);
		object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
		return object;
	}

}
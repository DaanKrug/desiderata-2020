defmodule ExApp.CancerdiagnosticHandler do

  alias ExApp.SanitizerUtil
  alias ExApp.MessagesUtil
  alias ExApp.MapUtil
  alias ExApp.Cancerdiagnostic
  alias ExApp.GenericValidator
  alias ExApp.CancerdiagnosticValidator
  alias ExApp.CancerdiagnosticService
  alias ExApp.UserService
  
  
  def objectClassName() do
    "Diagnóstico Câncer"
  end 
  
  def objectTableName() do
    "cancerdiagnostic"
  end
  
  def accessCategories() do
    ["admin","admin_master"]
  end
  
  def accessCategoriesAuditor() do
    ["admin","admin_master","system_auditor"]
  end
  
  def validateToSave(mapParams) do
    a1_cancertype = CancerdiagnosticValidator.getA1_cancertype(mapParams)
    a2_cancerestadiament = CancerdiagnosticValidator.getA2_cancerestadiament(mapParams)
    a3_date = CancerdiagnosticValidator.getA3_date(mapParams)
    a4_userid = CancerdiagnosticValidator.getA4_userid(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_cancertype,a2_cancerestadiament,a3_date]
    cond do
      (!(ownerId > 0)) -> MessagesUtil.systemMessage(412)
      (SanitizerUtil.hasEmpty(params)) -> MessagesUtil.systemMessage(480,[objectClassName()])
      (!(a4_userid > 0) or nil == UserService.loadById(a4_userid)) 
        -> MessagesUtil.systemMessage(100065)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToUpdate(id,cancerdiagnostic,mapParams) do
	ownerId = GenericValidator.getOwnerId(mapParams)
    cond do
      (SanitizerUtil.hasLessThan([id,ownerId],1) or nil == cancerdiagnostic) 
        -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToDelete(id,cancerdiagnostic) do
    cond do
      (!(id > 0) or nil == cancerdiagnostic) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def validateToRestore(id,cancerdiagnostic) do
    cond do
      (!(id > 0) or nil == cancerdiagnostic) -> MessagesUtil.systemMessage(412)
      true -> MessagesUtil.systemMessage(205)
    end
  end
  
  def save(mapParams,_escapedAuth) do
    a1_cancertype = CancerdiagnosticValidator.getA1_cancertype(mapParams)
    a2_cancerestadiament = CancerdiagnosticValidator.getA2_cancerestadiament(mapParams)
    a3_date = CancerdiagnosticValidator.getA3_date(mapParams)
    a4_userid = CancerdiagnosticValidator.getA4_userid(mapParams)
	ownerId = GenericValidator.getOwnerId(mapParams)
	params = [a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId]
	newObject = Cancerdiagnostic.new(0,a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId)
    cond do
      (!(CancerdiagnosticService.create(params))) 
        -> MessagesUtil.systemMessage(100148)
      true -> MessagesUtil.systemMessage(200,[newObject])
    end
  end
  
  def update(id,cancerdiagnostic,mapParams) do
    a1_cancertype = CancerdiagnosticValidator.getA1_cancertype(mapParams,
                                                               MapUtil.get(cancerdiagnostic,:a1_cancertype))
    a2_cancerestadiament = CancerdiagnosticValidator.getA2_cancerestadiament(mapParams,
                                                       MapUtil.get(cancerdiagnostic,:a2_cancerestadiament))
    a3_date = CancerdiagnosticValidator.getA3_date(mapParams,MapUtil.get(cancerdiagnostic,:a3_date))
    params = [a1_cancertype,a2_cancerestadiament,a3_date]
    cond do
      (!(CancerdiagnosticService.update(id,params))) 
        -> MessagesUtil.systemMessage(100149)
      true -> MessagesUtil.systemMessage(201)
    end
  end
  
end
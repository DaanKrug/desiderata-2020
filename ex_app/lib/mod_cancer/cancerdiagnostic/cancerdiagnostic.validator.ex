defmodule ExApp.CancerdiagnosticValidator do
  
  use ExApp.BaseValidator
  alias ExApp.StringUtil
  alias ExApp.NumberUtil
  alias ExApp.SanitizerUtil
  alias ExApp.MapUtil
  
  def getA1_cancertype(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a1_cancertype),defaultValue)
    SanitizerUtil.sanitizeAll(StringUtil.capitalize(value),false,true,250,"A-z0-9")
  end
  
  def getA2_cancerestadiament(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a2_cancerestadiament),defaultValue)
    SanitizerUtil.sanitizeAll(StringUtil.capitalize(value),false,true,20,"A-z0-9")
  end
  
  def getA3_date(mapParams,defaultValue \\ nil) do
    value = StringUtil.coalesce(MapUtil.get(mapParams,:a3_date),defaultValue)
    SanitizerUtil.sanitizeAll(value,false,true,19,"DATE_SQL")
  end
  
  def getA4_userid(mapParams,defaultValue \\ nil) do
    value = NumberUtil.coalesce(MapUtil.get(mapParams,:a4_userid),defaultValue,true)
    NumberUtil.toInteger(SanitizerUtil.sanitizeAll(value,true,true,20,nil))
  end
  
end
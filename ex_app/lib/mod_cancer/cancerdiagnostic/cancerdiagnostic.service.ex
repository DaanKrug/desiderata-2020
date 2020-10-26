defmodule ExApp.CancerdiagnosticService do

  use ExApp.BaseServiceSecure
  alias ExApp.App.DAOService
  alias ExApp.DateUtil
  alias ExApp.StringUtil
  alias ExApp.NumberUtil
  alias ExApp.AuthorizerUtil
  alias ExApp.ResultSetHandler
  alias ExApp.Cancerdiagnostic
  
  def loadById(id) do
    sql = """
	      select id, a1_cancertype,
          a2_cancerestadiament,
          a3_date,
          a4_userid, ownerId from cancerdiagnostic where id = ? limit 1
	      """
	resultset = DAOService.load(sql,[id])
	cond do
      (nil == resultset or resultset.num_rows == 0) -> nil
      true -> getCancerdiagnostic(resultset)
    end
  end
  
  def create(paramValues) do
    sql = """
          insert into cancerdiagnostic(a1_cancertype,
          a2_cancerestadiament,
          a3_date,
          a4_userid,ownerId,created_at) values (?,?,?,?,?,?)
	      """
    DAOService.insert(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false)])
  end
  
  def update(id,paramValues) do
    sql = """
          update cancerdiagnostic set a1_cancertype = ?,
          a2_cancerestadiament = ?,
          a3_date = ?,
          updated_at = ? where id = ?
	      """
    DAOService.update(sql,paramValues ++ [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def updateDependencies(_id,_cancerdiagnostic) do
  
  end
  
  def loadAll(page,rows,conditions,deletedAt,_mapParams) do
    limit = cond do
      (page > 0 and rows > 0) -> " limit #{((page - 1) * rows)},#{rows}"
      true -> ""
    end
    sql = "select count(id) from cancerdiagnostic where #{deletedAt} #{conditions}"
    resultset = DAOService.load(sql,[])
    total = NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,0,0))
    sql = """
          select id, a1_cancertype,
          a2_cancerestadiament,
          a3_date,
          a4_userid, 
          ownerId from cancerdiagnostic 
          where #{deletedAt} #{conditions} 
          order by id asc
          #{limit}
          """
    resultset = DAOService.load(sql,[])
    cond do
      (nil == resultset or resultset.num_rows == 0) 
        -> [Cancerdiagnostic.new(0,nil,nil,nil,0,0,0)]
      true -> parseResults(resultset,total,[],0) 
    end
  end
  
  def loadAllForPublic(_page,_rows,_conditions,_deletedAt,_mapParams) do
    [Cancerdiagnostic.new(0,nil,nil,nil,0,0,0)]
  end
  
  def delete(id) do
    DAOService.update("update cancerdiagnostic set deleted_at = ? where id = ?",
                      [DateUtil.getNowToSql(0,false,false),id])
  end
  
  def unDrop(id) do
    DAOService.update("update cancerdiagnostic set deleted_at = null where id = ?",[id])
  end
  
  def trullyDrop(id) do
    DAOService.delete("delete from cancerdiagnostic where id = ?",[id])
  end
  
  defp parseResults(resultset,totalRows,arrayMap,row) do
    cond do
      (nil == resultset or resultset.num_rows == 0 or row >= resultset.num_rows) -> arrayMap
      true -> parseResults(resultset,totalRows,
                           arrayMap ++ [getCancerdiagnostic(resultset,row,totalRows)],row + 1)
    end
  end
  
  defp getCancerdiagnostic(resultset,row \\ 0,totalRows \\ nil) do
    total = cond do
      (row == 0) -> totalRows
      true -> nil
    end
    Cancerdiagnostic.new(NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,0)),
                         ResultSetHandler.getColumnValue(resultset,row,1),
                         ResultSetHandler.getColumnValue(resultset,row,2),
                         ResultSetHandler.getColumnValue(resultset,row,3),
                         NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,4)),
                         NumberUtil.toInteger(ResultSetHandler.getColumnValue(resultset,row,5)),
                         total)
  end
end
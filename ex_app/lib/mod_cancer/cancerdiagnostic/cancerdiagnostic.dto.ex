defmodule ExApp.Cancerdiagnostic do

  def new(id,a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId,totalRows \\ nil) do
    cond do
      (nil == totalRows) -> newNoTotalRows(id,a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId)
      true -> newTotalRows(id,a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId,totalRows)
    end
  end
   
  defp newNoTotalRows(id,a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId) do
    %{
      id: id,
      a1_cancertype: a1_cancertype,
      a2_cancerestadiament: a2_cancerestadiament,
      a3_date: a3_date,
      a4_userid: a4_userid,
      ownerId: ownerId
    }
  end
   
  defp newTotalRows(id,a1_cancertype,a2_cancerestadiament,a3_date,a4_userid,ownerId,totalRows) do
    %{
      id: id,
      a1_cancertype: a1_cancertype,
      a2_cancerestadiament: a2_cancerestadiament,
      a3_date: a3_date,
      a4_userid: a4_userid,
      ownerId: ownerId,
      totalRows: totalRows
    }
  end
   
end
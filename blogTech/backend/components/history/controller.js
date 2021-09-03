import { nanoid } from "nanoid";
import { response,reque } from "../../../network";
import { list, find, remove } from "../../../store/dummy";

const history_TABLE = "stories";
export const create = async (req,res)=>{
    const history = req.body
  //* Creamos el data de la historia nueva
  const data = {
    id: nanoid(),
    title: history.title,
    content: history.content,
    history_id: history.history_id,
    author: history.author,
  };

  const historys = await store(history_TABLE, data);

  return response({ res, data: historys });
};

export const read = async (req,res)=>{
    const { id } = req.params;

    const history = await find(history_TABLE, id);
    return response({ res, data: history});
};
export const up = async (req, res) => {
  // recibe los datos
  const history = req.body;
  const { id } = req.params;

  const data = {
    id: id,
    title: history.title,
    content: history.content,
    history_id: history.history_id,
    author: history.author,
  };
  const uphistory = await update(history_TABLE, id,data);
  return response({ res, data: uphistory });
  
};
export const destroy = async (req,res)=>{ 
    const { id } = req.params;

    const history = await remove(history_TABLE, id);
  
    if (!history) {
      return response({ res, ok: false, data: { error: "History not found" } });
    }
  
    return response({ res, data: { success: "History deleted successfully!" } });
  
};
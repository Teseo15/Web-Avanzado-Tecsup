import { nanoid } from "nanoid";
import { response,reque } from "../../../network";
import { list, find, remove } from "../../../store/dummy";
/**
 * * CREATE_STRORY => user_id, title, author, text, dateTime
 * * READ_STORY => story_id
 * * UPDATE_STORY => story_id, story_data
 * * DELETE_STORY => story_id
 */
//*POST
const USER_TABLE = "stories";
export const create = async (req,res)=>{
    const history = req.body

  //* Creamos el data de la historia nueva
  const data = {
    id: nanoid(),
    title: history.title,
    content: history.content,
    user_id: history.user_id,
    author: history.author,
  };

  const historys = await store(USER_TABLE, data);

  return response({ res, data: historys });
};
export const read = async (req,res)=>{
    const { id } = req.params;

    const history = await find(USER_TABLE, id);
    return response({ res, data: history});
};
export const update = (req,res)=> {
    const { title,author,text} = req.body;
    return response({
    res,    
    data: { title,author,text},
    });
};
export const destroy = async (req,res)=>{ 
    const { id } = req.params;

    const history = await remove(USER_TABLE, id);
  
    if (!history) {
      return response({ res, ok: false, data: { error: "History not found" } });
    }
  
    return response({ res, data: { success: "History deleted successfully!" } });
  
};
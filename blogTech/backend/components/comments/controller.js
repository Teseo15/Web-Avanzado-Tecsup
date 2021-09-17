import { list, find, remove,store,update } from "../../../store/dummy";
import { nanoid } from "nanoid";
import { response } from "../../../network";

const comment_TABLE = "comments";

export const getComments = async (req, res) => {
  const comments = await list("comments");

  response({ res, data: comments });
};

export const save = async (req,res) => {
  //? Tengo que modificar para agregarle un ID
  const com = req.body
  //* Creamos el data de la historia nueva
  const data = {
    id: nanoid(),
    comment: com.comment,
    author: com.author,
  };

 const body2 = await store("comments", data);

  return response({ res, data: body2 });
};

export const read = async (req,res)=>{
  const { id } = req.params;

  const comment = await find(comment_TABLE, id);
  return response({ res, data: comment});
};
export const up = async (req, res) => {
// recibe los datos
const comment = req.body;
const { id } = req.params;

const data = {
  id: nanoid(),
  comment: comment.comment,
  author: comment.author,
};

const upcomment = await update(comment_TABLE, id,data);
return response({ res, data: upcomment });

};
export const destroy = async (req,res)=>{ 
  const { id } = req.params;

  const comment = await remove(comment_TABLE, id);

  if (!comment) {
    return response({ res, ok: false, data: { error: "comment not found" } });
  }

  return response({ res, data: { success: "comment deleted successfully!" },status:204 });

};
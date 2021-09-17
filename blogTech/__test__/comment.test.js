import request from "supertest";
import { app } from "../backend/app";
import { base_url } from "../config/config";


// Primer test voy a listar a los comments
describe("Lista de comments", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/comments`);
      

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});
// Ahora vamos a mostrar un comentario
describe("Mostrando una comments", () => {
    test("Metodo GET", async () => {
  
      const result = await request(app)
        .get(`${base_url}/comments/read/ldkmslkadm`)
        expect(result.status).toBe(200);
        expect(result.ok).toBe(true);
      });
});
//Eliminar un comentario
describe("Eliminar una comments", () => {
  test("Metodo DELETE", async () => {

    const result = await request(app)
      .delete(`${base_url}/comments/delete/ldkmslkadm`)
      expect(result.status).toBe(204);
      expect(result.ok).toBe(true);
    });
});

//Creando un comentario
describe("Creando comment", () => {
    test("Metodo POST", async () => {
  
      const body = {
        comment: "lorem midamdklmasldkasmlkasdm",
        author: "José Arguedas",
      };
  
      const result = await request(app)
        .post(`${base_url}/comments/create`)
        .send(body);
  
      expect(result.status).toBe(200);
      expect(result.ok).toBe(true);
    });
});

//Actualizando un comment
describe("Actualizando comment", () => {
  test("Metodo PUT", async () => {

    const body = {
      comment: "Un hombre que busca venganza",

      author: "No lo conozco",
    };

    const result = await request(app)
      .put(`${base_url}/comments/update/ldkmslkadm`)
      .send(body);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

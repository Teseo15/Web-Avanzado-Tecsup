import request from "supertest";
import { app } from "../backend/app";
import { base_url } from "../config/config";

// Ahora vamos a mostrar una storie
describe("Mostrando una stories", () => {
    test("Metodo GET", async () => {
  
      const result = await request(app)
        .get(`${base_url}/stories/read/30`)
        expect(result.status).toBe(200);
        expect(result.ok).toBe(true);
      });
});
//Eliminar una historia
describe("Eliminar una stories", () => {
  test("Metodo DELETE", async () => {

    const result = await request(app)
      .delete(`${base_url}/stories/delete/30`)
      expect(result.status).toBe(204);
      expect(result.ok).toBe(true);
    });
});

//Creando una historia
describe("Creando storie", () => {
    test("Metodo POST", async () => {
  
      const body = {
        title: "El Sexto",
        content: "lorem midamdklmasldkasmlkasdm",
        user_id: "L3HS",
        author: "José Arguedas",
      };
  
      const result = await request(app)
        .post(`${base_url}/stories/create`)
        .send(body);
  
      expect(result.status).toBe(200);
      expect(result.ok).toBe(true);
    });
});

//Actualizando una historia
describe("Actualizando storie", () => {
    test("Metodo PUT", async () => {
  
      const body = {
        title: "El conde de Montecristo",
        content: "Un hombre que busca venganza",
        user_id: "L3HS",
        author: "No lo conozco",
      };
  
      const result = await request(app)
        .put(`${base_url}/stories/update/20`)
        .send(body);
  
      expect(result.status).toBe(200);
      expect(result.ok).toBe(true);
    });
});
  

  
  
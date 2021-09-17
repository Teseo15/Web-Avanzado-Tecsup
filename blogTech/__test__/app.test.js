import request from "supertest";
import { app } from "../backend/app";
import { base_url } from "../config/config";

const bearer =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlcGl0b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBlcGl0bzEyMzQ1NiIsImlhdCI6MTYzMDU5NTkxNH0.O9Xz7lgpXHmCf2VP0H3v0WonpdABmdxvEJm2q8hixtQ";

// Primer test voy a listar a los usuarios
describe("Lista de usuarios", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/users`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a crear un usuario
describe("Creando usuario", () => {
  test("Metodo POST", async () => {
    const body = {
      name: "Linder Test",
      last_name: "Hassinger Test",
      email: "linder@gmail.com",
      password: "linder123456",
    };

    const result = await request(app)
      .post(`${base_url}/auth/signUp`)
      .send(body);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a buscar un usuario
describe("Buscando un usuario", () => {
  test("Metodo GET", async () => {

    const result = await request(app)
      .get(`${base_url}/user/show/POO`)
      .set("Authorization", bearer);

      expect(result.status).toBe(200);
      expect(result.ok).toBe(true);
    });
});

//Actualizar Usuario
describe("Actualizando usuario", () => {
  test("Metodo PUT", async () => {

    const body = {
      name: "Brayan Update",
      last_name: "Blas Update",
      email: "brayan@gmail.com",
      password: "admin123456",
    };

    const result = await request(app)
      .put(`${base_url}/user/update/L3HS`)
      .set("Authorization", bearer)
      .send(body);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});






"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMaterias = exports.createMaterias = void 0;
const createMaterias = (req, res, materiasService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMateria = yield materiasService.createMaterias(req.body);
        res.status(201).json(newMateria);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.createMaterias = createMaterias;
const getAllMaterias = (req, res, materiasService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const materias = yield materiasService.getAllMaterias();
        res.status(200).json(materias);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.getAllMaterias = getAllMaterias;

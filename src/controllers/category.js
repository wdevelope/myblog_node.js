const categoryService = require('../services/category.js');

module.exports = {
  // 카테고리 생성
  create: async (req, res) => {
    try {
      const { name, position } = req.body;
      const category = await categoryService.create(name, position);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  },

  // 모든 카테고리 조회
  getAll: async (req, res) => {
    try {
      const categories = await categoryService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 특정 카테고리 조회
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.getOne(id);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 카테고리 업데이트
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updated = await categoryService.update(id, name);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 카테고리 삭제
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await categoryService.delete(id);
      res.status(200).json({ message: '카테고리를 삭제했습니다.' });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },
};

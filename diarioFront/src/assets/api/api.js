import axios from 'axios';

 const url = 'https://diarioapi.onrender.com';
export const api = {
  getAll: async () => {
    try {
      const character = await axios.get(
        url + '/characters',
      );
      return character.data;
    } catch (err) {
      console.log(err, 'erro no servidor');
    }
  },
  creat: async (Text) => {
    try {
      const newText = await axios.post(
        url + '/characters/create',
        Text,
      );
      return newText;
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (listId) => {
    const isDeleted = await axios.delete(
      url + `/characters/delete/${listId}`,
    );
    return isDeleted;
  },
  update: async (list) => {
    const listUpdated = await axios.put(
      url + `/characters/update/${list.id}`,
      list,
    );
    return listUpdated;
  },
};

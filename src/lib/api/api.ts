// import { cards, decks } from "../dummy";
import { SERVER_URL } from "./common";

export const asyncGetDecks = async () => {
  const response = await fetch(SERVER_URL + '/decks', {
    method: 'Get',
    credentials: 'include', // Include cookies for cross-origin requests
  });
  return response.json();
};

export const asyncGetDeckCards = async (did: Number) => {
    const response = await fetch(SERVER_URL + `/deck/${did}/cards`, {
        method: 'Get',
        credentials: 'include', // Include cookies for cross-origin requests
      });
      return response.json();
};

export const asyncGetStudy = async (did: Number) => {
    const response = await fetch(SERVER_URL + `/study/${did}/next`, {
        method: 'Get',
        credentials: 'include', // Include cookies for cross-origin requests
      });
      return response.json();
};

export const asyncPostStudyAnswer = async (cid: Number, rating: Number, time_started: Number) => {
    const response = await fetch(SERVER_URL + `/study/answer`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ cid, rating, time_started}),
        credentials: 'include', // Include cookies for cross-origin requests
      });
      return response.json();
}

export const asyncQueryCard = async (cid: Number) => {
    const response = await fetch(`/api/cards/${cid}`);
    return response.json();
}

export const asyncPostAddCardRaw = async (did: Number, front: String, back: String) => {
    const response = await fetch(SERVER_URL + `/deck/${did}/add/raw`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ front, back}),
        credentials: 'include', // Include cookies for cross-origin requests
      });
      return response.json();
}

export const asyncGetAddCardFromCard = async (did: Number, cid: Number) => {
  const response = await fetch(SERVER_URL + `/deck/${did}/add/from/${cid}`, {
      method: 'Get',
      credentials: 'include', // Include cookies for cross-origin requests
    });
    return response.json();
}

export const asyncRemoveCard = async (cid: Number) => {
    const response = await fetch(SERVER_URL + `/card/remove/${cid}`, {
        method: 'GeT',
        credentials: 'include', // Include cookies for cross-origin requests
      });
      return response.json();
}

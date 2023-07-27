import axios from 'axios';
import { DISCORD_API_URL } from '../lib/constants';
import { IPostLoginData, IPostLoginResponse } from '../interfaces/discord';

const discordService = axios.create({
  baseURL: DISCORD_API_URL,
});

export const postLogin = async (data: IPostLoginData) => {
  const res = await discordService.post<IPostLoginResponse>(
    '/oauth2/token',
    data,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return res.data;
};

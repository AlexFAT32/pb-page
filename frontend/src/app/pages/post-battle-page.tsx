import React from 'react';
import { BattleResultResponse } from '@game/shared';
import { getPostBattleData } from '../api/get-post-battle-data';
import { Card, Center, Loader, SimpleGrid } from '@mantine/core';
import { TeamInfo } from '../components/post-battle-page/team-info';
import { useQuery } from 'react-query';

export const PostBattlePage = () => {

  const apiUrl = process.env.LOCAL_URL || 'http://localhost:3333/api/battle/1/result';
  const { isLoading, isError, error, data: battleResult  } = useQuery(['battle-result'], (): Promise<BattleResultResponse> => getPostBattleData(apiUrl));
  const title = 'Post Battle Page';
  if (isError) {
    return <div>Error fetching battle result.</div>;
  }
  if (isLoading) {
    return <Center><Loader color={'white'} /></Center>;
  }
  const { winners, losers } = battleResult || {};

  const sortedWinners = React.useMemo(() => winners.sort((a, b) => b.score - a.score) || [], [winners]);
  const sortedLosers = React.useMemo(() => losers.sort((a, b) => b.score - a.score) || [], [losers]);

  return (
    <Card shadow="sm" title={'Post Battle Page'} withBorder>
      <Card.Section>
        <Center>
          <h1>{title}</h1>
        </Center>

      </Card.Section>
      <SimpleGrid spacing="md" cols={2}>
        <Card shadow="sm" withBorder>
          <TeamInfo title={'Winners'} players={sortedWinners} />
        </Card>
        <Card shadow="sm" withBorder>
          <TeamInfo title={'Losers'} players={sortedLosers} />
        </Card>
      </SimpleGrid>
    </Card>
  );
};

import React from 'react';
import { BattleResultResponse } from '@game/shared';
import { getPostBattleData } from '../api/get-post-battle-data';
import { Card, Center, Loader, SimpleGrid } from '@mantine/core';
import { TeamInfo } from '../components/post-battle-page/team-info';
import { useQuery } from 'react-query';

export const PostBattlePage = () => {
  if(!process.env.LOCAL_URL) throw new Error('LOCAL_URL is not defined');
  const apiUrl = process.env.LOCAL_URL;
  const { isLoading, isError, error, data: battleResult  } = useQuery(['battle-result'], (): Promise<BattleResultResponse> => getPostBattleData(apiUrl));

  if (isError) {
    console.error('Error fetching battle result:', error);
    return <div>Error fetching battle result.</div>;
  }
  if (isLoading) {
    return <Center><Loader color={'white'} /></Center>;
  }

  const sortedWinners = React.useMemo(() => battleResult?.winners.sort((a, b) => b.score - a.score) || [], [battleResult.winners]);
  const sortedLosers = React.useMemo(() => battleResult?.losers.sort((a, b) => b.score - a.score) || [], [battleResult]);

  return (
    <Card shadow="sm" title={'Post Battle Page'} withBorder>
      <Card.Section>
        <Center>
          <h1>Battle result</h1>
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

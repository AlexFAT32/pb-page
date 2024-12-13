import { BattleResultResponse } from '@game/shared';
import { getPostBattleData } from '../api/get-post-battle-data';
import { Card, Center, Loader, SimpleGrid } from '@mantine/core';
import { TeamInfo } from '../components/post-battle-page/team-info';
import { useQuery } from 'react-query';

export const PostBattlePage = () => {
  const apiUrl = process.env.LOCAL_URL || 'http://localhost:3333/api/battle/1/result';
  const { isLoading, isError, data: battleResult  } = useQuery(['battle-result'], (): Promise<BattleResultResponse> => getPostBattleData(apiUrl));

  if (isError) {
    return <div>An error occurred.</div>;
  }
  if (isLoading) {
    return <Center><Loader color={'white'} /></Center>;
  }
  const sortedWinners = battleResult?.winners.sort((a, b) => b.score - a.score) || [];
  const sortedLosers = battleResult?.losers.sort((a, b) => b.score - a.score) || [];

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

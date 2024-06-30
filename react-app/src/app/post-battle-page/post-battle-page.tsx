import { BattleResultResponse } from '@game/types';
import { useEffect, useRef, useState } from 'react';
import { getPostBattleData } from '../api/get-post-battle-data';
import { Card, Center, SimpleGrid } from '@mantine/core';
import { TeamInfo } from './team-info';

export const PostBattlePage = () => {
  const [battleResult, setBattleResult] = useState<BattleResultResponse>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostBattleData('/api/battle-result');
        setBattleResult(data);
      }catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()

  }, [])


  if (isLoading) {
    return <p>Loading...</p>
  }
  const sortedWinners = battleResult?.winners.sort((a, b) => b.score - a.score);
  const sortedLosers = battleResult?.losers.sort((a, b) => b.score - a.score);

  return (
    <Card shadow="sm" title={"Post Battle Page"} withBorder>
      <Card.Section>
        <Center>
          <h1>Post Battle Page</h1>
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

  )


}

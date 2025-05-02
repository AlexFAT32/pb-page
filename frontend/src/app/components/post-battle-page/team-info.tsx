import { PlayerWithStats } from '@game/shared';
import { Group, Flex, ScrollArea, Text } from '@mantine/core';
import { PlayerWithTooltip } from './player-with-tooltip';

export type TeamInfoProps = {
  title: string;
  players: PlayerWithStats[];
};
export const TeamInfo = ({ title, players }: TeamInfoProps) => {
  useEffect(() => {
    players.sort((a, b) => b.score - a.score);
  }, []);
  return (
    <div>
      <Group justify="space-between">
        <Text py={3} fw={'bold'} size={'xl'}>
          {title}
        </Text>
        <Text py={3}>Score</Text>
      </Group>
      <ScrollArea h={400}>
        {players.map((player) => {
          return (
            <div key={player.id}>
              <Group justify="space-between">
                <PlayerWithTooltip player={player} />
                <Text py={3} mr={'2rem'} c={!player.isAlive ? 'dimmed' : ''}>
                  {player.score}
                </Text>
              </Group>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

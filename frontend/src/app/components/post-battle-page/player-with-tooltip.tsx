import { PlayerWithStats } from '@game/shared';
import { Button, Center, Group, HoverCard, Text } from '@mantine/core';
import classes from './pb-page.module.css';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export const PlayerWithTooltip = ({ player }: { player: PlayerWithStats }) => {
  const [loading, { toggle }] = useDisclosure(false);
  const [requested, setRequested] = useState(false);

  const handleClick = () => {
    if (!requested) {
      toggle();
      setTimeout(() => {
        setRequested(true);
      }, 2000);
    }
  };

  return (
    <HoverCard
      width={320}
      shadow="md"
      withArrow
      openDelay={100}
      closeDelay={100}
    >
      <HoverCard.Target>
        <Text
          className={classes.playerName}

          py={3}
          c={!player.isAlive ? 'dimmed' : ''}
        >
          {player.name}
        </Text>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group justify={'space-between'}>
          <Text>Total kills:</Text>
          <Text>{player.totalKills}</Text>
        </Group>
        <Group justify={'space-between'}>
          <Text>Total deaths:</Text>
          <Text>{player.totalDeaths}</Text>
        </Group>
        <Center pt={'1rem'}>
          <Button
            size={'xs'}
            variant={'outline'}
            loading={loading && !requested}
            onClick={handleClick}
            color={'white'}
          >
            {requested ? 'Requested' : 'Send Friend Request'}
          </Button>
        </Center>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  // const { data, error, isLoading } = useGames(gameQuery);
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  // if (error) return <Text>{error}</Text>;
  if (error) return <Text>{error.message}</Text>;

  // return (
  //   <Box padding={2}>
  //     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
  //       {isLoading &&
  //         skeletons.map((skeleton) => (
  //           <GameCardContainer key={skeleton}>
  //             <GameCardSkeleton />
  //           </GameCardContainer>
  //         ))}
  //       {/* {data?.results.map((game) => (
  //         <GameCardContainer key={game.id}>
  //           <GameCard game={game} />
  //         </GameCardContainer>
  //       ))} */}
  //       {data?.pages.map((page, index) => (
  //         <React.Fragment key={index}>
  //           {page.results.map((game) => (
  //             <GameCardContainer key={game.id}>
  //               <GameCard game={game} />
  //             </GameCardContainer>
  //           ))}
  //         </React.Fragment>
  //       ))}
  //     </SimpleGrid>
  //     {hasNextPage && (
  //       <Button onClick={() => fetchNextPage()} marginY={10}>
  //         {isFetchingNextPage ? "Loading..." : "Load More"}
  //       </Button>
  //     )}
  //   </Box>
  // );

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage} // !!: if hasNextPage = undefined -> return boolean false
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={2}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

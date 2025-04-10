// Script to get sample data for testing
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSampleData() {
  try {
    // Get a sample game
    const game = await prisma.game.findFirst({
      orderBy: { season: 'desc' }
    });
    
    // Get a sample player (QB)
    const qb = await prisma.player.findFirst({
      where: { position: 'QB' }
    });
    
    // Get a sample game stat
    const gameStat = await prisma.gameStat.findFirst();
    
    console.log({
      sampleGameKey: game?.key,
      samplePlayerId: qb?.id,
      sampleGameStatId: gameStat?.id
    });
    
  } catch(e) {
    console.error('Error getting sample data:', e);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
getSampleData();
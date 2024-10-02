using Microsoft.EntityFrameworkCore;


public class PortfolioDbContext : DbContext
{
    public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : base(options) { }

    public DbSet<InvestmentPortfolio> Portfolios { get; set; }
    public DbSet<Investment> Investments { get; set; }
}

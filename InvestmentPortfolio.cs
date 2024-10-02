public class InvestmentPortfolio
{
    public int Id { get; set; }
    public string? UserId { get; set; }
    public string? PortfolioName { get; set; }
    public decimal TotalValue { get; set; }
    public List<Investment> Investments { get; set; } = new List<Investment>();
}

public class Investment
{
    public int Id { get; set; }
    public string? AssetName { get; set; }
    public decimal Quantity { get; set; }
    public decimal PricePerUnit { get; set; }
}

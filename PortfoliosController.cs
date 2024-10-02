using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class PortfoliosController : ControllerBase
{
    private readonly PortfolioDbContext _context;

    public PortfoliosController(PortfolioDbContext context)
    {
        context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetPortfolios()
    {
        var portfolios = await _context.Portfolios.Include(p => p.Investments).ToListAsync();
        return Ok(portfolios);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPortfolio(int id)
    {
        var portfolio = await _context.Portfolios.Include(p => p.Investments).FirstOrDefaultAsync(p => p.Id == id);
        if (portfolio == null)
        {
            return NotFound();
        }
        return Ok(portfolio);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePortfolio([FromBody] InvestmentPortfolio portfolio)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Portfolios.Add(portfolio);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetPortfolio", new { id = portfolio.Id }, portfolio);
    }
}

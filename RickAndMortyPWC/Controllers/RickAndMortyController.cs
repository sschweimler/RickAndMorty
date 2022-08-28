using Microsoft.AspNetCore.Mvc;
using RickAndMorty.Net.Api.Models.Domain;
using RickAndMorty.Net.Api.Service;

namespace RickAndMortyPWC.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RickAndMortyController : ControllerBase
    {
        private readonly ILogger<RickAndMortyController> _logger;
        private readonly IRickAndMortyService _rickAndMortyService;

        public RickAndMortyController(ILogger<RickAndMortyController> logger, IRickAndMortyService rickAndMortyService)
        {
            _logger = logger;
            _rickAndMortyService = rickAndMortyService;
        }

        [HttpGet(Name = "GetRickAndMortyCharacter")]
        public async Task<IEnumerable<Character>> GetAsync(string characters)
        {
            IEnumerable<Character> results = await _rickAndMortyService.FilterCharacters(characters);
            return results;
        }
    }
}
using Microsoft.EntityFrameworkCore.Migrations;

namespace SentimentApp.API.Migrations
{
    public partial class CreatedLexiconTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lexicon",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Word = table.Column<string>(nullable: false),
                    Grade = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lexicon", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lexicon_Word",
                table: "Lexicon",
                column: "Word",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lexicon");
        }
    }
}

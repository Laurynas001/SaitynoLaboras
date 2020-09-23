using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SaitynoLaboras.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GasStations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Longtitude = table.Column<string>(maxLength: 50, nullable: false),
                    Latitude = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GasStations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Prices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    A98Price = table.Column<double>(nullable: false),
                    A95Price = table.Column<double>(nullable: false),
                    DPrice = table.Column<double>(nullable: false),
                    DzPrice = table.Column<double>(nullable: false),
                    GasPrice = table.Column<double>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    GasStationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Prices_GasStations_GasStationId",
                        column: x => x.GasStationId,
                        principalTable: "GasStations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Prices_GasStationId",
                table: "Prices",
                column: "GasStationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Prices");

            migrationBuilder.DropTable(
                name: "GasStations");
        }
    }
}

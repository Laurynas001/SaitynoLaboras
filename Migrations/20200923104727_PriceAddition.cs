using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SaitynoLaboras.Migrations
{
    public partial class PriceAddition : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Price",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    A98Price = table.Column<double>(maxLength: 50, nullable: false),
                    A95Price = table.Column<double>(maxLength: 50, nullable: false),
                    DPrice = table.Column<double>(maxLength: 50, nullable: false),
                    DzPrice = table.Column<double>(maxLength: 50, nullable: false),
                    GasPrice = table.Column<double>(maxLength: 50, nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    GasStationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Price", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Price_GasStations_GasStationId",
                        column: x => x.GasStationId,
                        principalTable: "GasStations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Price_GasStationId",
                table: "Price",
                column: "GasStationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Price");
        }
    }
}

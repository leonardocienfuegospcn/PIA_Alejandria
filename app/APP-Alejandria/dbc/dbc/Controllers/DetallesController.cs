using dbc.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace dbc.Controllers
{
    public class DetallesController : ApiController
    {
    public HttpResponseMessage Get()
    {
      string query = @"
                    execute dbo.getDetalles
                  ";
      DataTable table = new DataTable();
      using (var con = new SqlConnection(ConfigurationManager.
        ConnectionStrings["BibliotecaAppDB"].ConnectionString))
      using (var cmd = new SqlCommand(query, con))
      using (var da = new SqlDataAdapter(cmd))
      {
        cmd.CommandType = CommandType.Text;
        da.Fill(table);
      }
      return Request.CreateResponse(HttpStatusCode.OK, table);
    }
    public string Post(detalles var)
    {
      try
      {
        string query = @"
                    execute dbo.agregarDetalle " + var.idRenta + @", " + var.isbn + @", " + var.cantidad + @", " + var.costo + @"
                  ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Registrado exitosamente";
      }
      catch (Exception)
      {
        return "Error al registrar";
      }
    }

    public string Put(detalles var)
    {
      try
      {
        string query = @"
                    execute dbo.editarDetalle " + var.idRenta + @", " + var.isbn + @", " + var.cantidad + @", " + var.costo + @"
                  ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Actualizado exitosamente";
      }
      catch (Exception)
      {
        return "Error al actualizar";
      }
    }

    public string Delete(int id)
    {
      try
      {
        string query = @"
                    execute dbo.eliminarDetalle " + id + @" 
                  ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Actualizado exitosamente";
      }
      catch (Exception)
      {
        return "Error al actualizar ";
      }
    }
  }
}

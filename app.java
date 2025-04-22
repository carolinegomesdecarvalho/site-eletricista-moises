import java.util.Scanner;

public class OrcamentoEletrico {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("MOC Serviços Elétricos - Simulador de Orçamento");
        System.out.print("Tipo de serviço (ex: instalação, reforma, manutenção): ");
        String tipo = sc.nextLine();

        System.out.print("Horas estimadas: ");
        double horas = sc.nextDouble();

        System.out.print("Custo por hora (R$): ");
        double valorHora = sc.nextDouble();

        double total = horas * valorHora;

        System.out.printf("\nResumo do orçamento:\n");
        System.out.printf("Serviço: %s\n", tipo);
        System.out.printf("Total estimado: R$ %.2f\n", total);

        sc.close();
    }
}

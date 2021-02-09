class Board
    attr_reader :rows

    def initialize
        @rows = Array.new(8) {Array.new(8)}        
        @null_piece = NullPiece.instance
    end

    def [](pos)
        row, col = pos
        @rows[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @rows[row][col] = val
    end

    def move_piece(start_pos, end_pos)
        sx = start_pos[0]
        sy = start_pos[1]
        ex = end_pos[0]
        ey = end_pos[1]

        raise "Start position is out of bounds" if sx < 0 || sx > 7 || sy < 0 || sy > 7
        raise "End position is out of bounds" if ex < 0 || ex > 7 || ey < 0 || ey > 7

        raise "Start position is empty" if self[start_pos].nil?
        raise "End position is invalid" if self[start_pos].color == self[end_pos].color

        self[end_pos] = self[start_pos].dup
        self[start_pos] = @null_piece



    end


end